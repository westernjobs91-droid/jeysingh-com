import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";
import Cmd from "@/components/Cmd";

const slug = "azure-storage-redundancy";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="Every Azure storage account keeps at least three copies of your data. The redundancy option decides where those copies live, and that decides what kind of disaster your data survives."
    >
      <h2 style={{ marginTop: 0 }}>The short answer</h2>
      <div className="tbl"><table>
        <thead><tr><th>Option</th><th>Where the copies live</th><th>Survives</th><th>Durability (per year)</th></tr></thead>
        <tbody>
          <tr><td><code>LRS</code></td><td>3 copies in one datacenter</td><td>A failed disk or server rack</td><td>11 nines</td></tr>
          <tr><td><code>ZRS</code></td><td>3 copies across 3 availability zones in one region</td><td>A whole datacenter (zone) going down</td><td>12 nines</td></tr>
          <tr><td><code>GRS</code></td><td>LRS in your region, plus LRS in a second region</td><td>A whole region going down</td><td>16 nines</td></tr>
          <tr><td><code>GZRS</code></td><td>ZRS in your region, plus LRS in a second region</td><td>A zone or a whole region going down</td><td>16 nines</td></tr>
        </tbody>
      </table></div>
      <p>
        Add <code>RA-</code> in front (<code>RA-GRS</code>, <code>RA-GZRS</code>) and you can also <strong>read</strong> from
        the second region at any time, without waiting for a failover.
      </p>

      <h2>A few words first</h2>
      <ul>
        <li><strong>Region:</strong> a geographic area with Azure datacenters, for example Canada Central.</li>
        <li><strong>Availability zone:</strong> one or more datacenters inside a region, with their own power, cooling and network. A region with zones has at least three.</li>
        <li><strong>Secondary region:</strong> for GRS and GZRS, Azure picks the second region for you. It is the region paired with yours, for example Canada East for Canada Central.</li>
        <li><strong>Durability:</strong> the chance your data is not lost. Eleven nines means 99.999999999%.</li>
        <li><strong>Availability:</strong> whether you can reach the data right now. Data can be safe (durable) but not reachable for a while.</li>
      </ul>

      <h2>LRS: locally redundant storage</h2>
      <p>
        Three copies, all in one datacenter. A write only succeeds once all three copies have
        it. This is the cheapest option and it protects you from a dead disk or a failed rack.
        It does not protect you from a fire, flood or power problem that takes out the whole
        datacenter.
      </p>
      <p>Pick it for data you can rebuild, test and dev accounts, and anything where cost wins.</p>

      <h2>ZRS: zone-redundant storage</h2>
      <p>
        Three copies, one in each of three availability zones in your region. If one zone goes
        down, you can still read and write. Nothing to fail over, nothing to remount.
      </p>
      <p>
        Pick it when the data must stay in one region (for example a data residency rule) and
        must stay online. Microsoft recommends ZRS for Azure Files.
      </p>

      <h2>GRS and RA-GRS: geo-redundant storage</h2>
      <p>
        Your region holds three copies (LRS). Azure then copies the data to the paired region,
        where it is kept as three more copies (LRS again). Six copies in total.
      </p>
      <p>
        The copy to the second region is <strong>asynchronous</strong>: Azure confirms your write
        before the second region has it. The second region is usually only a little behind, but
        there is no guaranteed lag. If the main region is lost, the last few changes can be lost
        with it.
      </p>
      <ul>
        <li><strong>GRS:</strong> you cannot read the second copy until a failover happens.</li>
        <li><strong>RA-GRS:</strong> you can read the second copy at any time through a second address: <code>youraccount-secondary.blob.core.windows.net</code>.</li>
      </ul>

      <h2>GZRS and RA-GZRS: geo-zone-redundant storage</h2>
      <p>
        The best of both. ZRS in your region, so a zone outage does not stop you, plus a copy in
        the paired region (kept as LRS), so a region outage does not lose your data. Microsoft
        recommends GZRS when you need both high availability and protection from a regional disaster.
      </p>
      <p><code>RA-GZRS</code> adds read access to the second region, the same way <code>RA-GRS</code> does.</p>

      <h2>Which one do I need?</h2>
      <div className="tbl"><table>
        <thead><tr><th>Situation</th><th>Pick</th></tr></thead>
        <tbody>
          <tr><td>Test data, logs you can regenerate, lowest cost</td><td><code>LRS</code></td></tr>
          <tr><td>Must stay in one region and stay online if a datacenter fails</td><td><code>ZRS</code></td></tr>
          <tr><td>Must survive losing a whole region, can wait for a failover</td><td><code>GRS</code></td></tr>
          <tr><td>App must keep reading even while the main region is down</td><td><code>RA-GRS</code> or <code>RA-GZRS</code></td></tr>
          <tr><td>Business critical: survive a zone outage and a region outage</td><td><code>GZRS</code> or <code>RA-GZRS</code></td></tr>
        </tbody>
      </table></div>

      <h2>The catches people miss</h2>
      <ul>
        <li><strong>Archive tier:</strong> blob archive is not supported on ZRS, GZRS or RA-GZRS accounts. If you need archive, use LRS, GRS or RA-GRS.</li>
        <li><strong>Premium accounts:</strong> premium block blob and SSD file share accounts offer LRS or ZRS. Premium page blobs are LRS only. Geo options need a standard general-purpose v2 account.</li>
        <li><strong>Azure Files:</strong> geo-redundancy is only for standard (HDD) file shares, and there is no read access to the second region. An RA-GRS account treats its file shares as plain GRS.</li>
        <li><strong>Redundancy is not backup.</strong> If someone deletes a blob or overwrites a file, every copy gets the delete. Use soft delete, versioning or Azure Backup for that.</li>
      </ul>

      <h2>Set it with the Azure CLI</h2>
      <p>The redundancy option is the <code>--sku</code> of the storage account:</p>
      <Cmd lines={[
        ["az storage account create \\", "new account"],
        "  --name stjeydemo01 \\",
        "  --resource-group rg-storage-demo \\",
        "  --location canadacentral \\",
        "  --sku Standard_GZRS",
      ]} />
      <p>
        The values are <code>Standard_LRS</code>, <code>Standard_ZRS</code>, <code>Standard_GRS</code>,{" "}
        <code>Standard_RAGRS</code>, <code>Standard_GZRS</code> and <code>Standard_RAGZRS</code>. Premium
        accounts use <code>Premium_LRS</code> or <code>Premium_ZRS</code>.
      </p>
      <p>Check what an account uses now (this changes nothing):</p>
      <Cmd lines={[
        ["az storage account show -n stjeydemo01 -g rg-storage-demo --query sku.name -o tsv", "e.g. Standard_GZRS"],
      ]} />
      <p>Moving between LRS, GRS and RA-GRS is a simple update:</p>
      <Cmd lines={[
        ["az storage account update -n stjeydemo01 -g rg-storage-demo --sku Standard_RAGRS", "LRS to RA-GRS"],
      ]} />
      <p>
        Adding or removing zones (for example LRS to ZRS) is different. Azure has to move your
        data, so you start a <strong>conversion</strong> from the storage account&apos;s{" "}
        <strong>Redundancy</strong> page in the portal (or with PowerShell or the CLI). It usually
        starts within 72 hours and can take longer to finish. If you also want to add or drop geo,
        that is a separate second step.
      </p>
      <p>On a geo account, see how far behind the second region is:</p>
      <Cmd lines={[
        ["az storage account show -n stjeydemo01 -g rg-storage-demo \\", ""],
        ["  --expand geoReplicationStats --query geoReplicationStats.lastSyncTime", "changes written before this time are safe in region 2"],
      ]} />

      <h2>What AZ-104 asks</h2>
      <p>
        Exam questions usually give you a requirement and ask for the cheapest option that meets
        it. Read the requirement for these words:
      </p>
      <ul>
        <li>&ldquo;lowest cost&rdquo; with no outage requirement: <strong>LRS</strong></li>
        <li>&ldquo;datacenter failure&rdquo; or &ldquo;zone failure&rdquo;, data stays in the region: <strong>ZRS</strong></li>
        <li>&ldquo;regional outage&rdquo;: <strong>GRS</strong> or <strong>GZRS</strong></li>
        <li>&ldquo;read data during a regional outage&rdquo; or &ldquo;from the secondary&rdquo;: an <strong>RA-</strong> option</li>
        <li>&ldquo;archive tier&rdquo; in the same question: rules out ZRS, GZRS and RA-GZRS</li>
      </ul>
      <p>
        Want to try it hands-on? Lab 03 and lab 10 in the{" "}
        <Link href="/learn/free-az-104-labs">free AZ-104 labs</Link> both build storage accounts you
        can change the redundancy on. New to the CLI? Start with{" "}
        <Link href="/learn/read-azure-cli">how to read any Azure CLI command</Link>.
      </p>
      <p className="note">
        Facts checked against Microsoft Learn (Azure Storage redundancy) on 27 November 2026.
      </p>
    </Article>
  );
}
