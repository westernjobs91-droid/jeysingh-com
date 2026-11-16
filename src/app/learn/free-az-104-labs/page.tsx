import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";
import Cmd from "@/components/Cmd";
import { site } from "@/lib/site";

const slug = "free-az-104-labs";
export const metadata = articleMetadata(slug);

const labs = [
  ["01", "Onboard a new hire: user, group, Reader role at resource group scope", "Identity, RBAC", "Free"],
  ["02", "Enforce a CostCenter tag with Azure Policy and protect the group with a lock", "Governance", "Free"],
  ["03", "Share files with a partner using a revocable SAS and lifecycle rules", "Storage access", "under $0.05"],
  ["04", "Team file share with snapshots and soft delete, restore a deleted file", "Azure Files", "under $0.05"],
  ["05", "Deploy a VM from Bicep, change the template, preview with what-if", "ARM, Bicep, VMs", "$0.01 to $0.10 an hour"],
  ["06", "Resize a VM and add a data disk", "VM sizes, disks", "$0.02 to $0.15 an hour"],
  ["07", "Zero-downtime release with an App Service deployment slot swap", "App Service", "about $0.10 an hour"],
  ["08", "Run an image from Azure Container Registry on ACI and Container Apps", "Containers", "under $0.20"],
  ["09", "Hub-spoke peering, an NSG, and prove traffic with Network Watcher", "Networking", "$0.02 to $0.20 an hour"],
  ["10", "Lock a storage account to a private endpoint with private DNS", "Secure access", "$0.03 to $0.12 an hour"],
  ["11", "Send logs to Log Analytics, query with KQL, alert by email", "Monitoring", "under $0.05"],
  ["12", "Back up a VM with a custom policy and restore its disks", "Backup", "$0.02 to $0.15 an hour"],
  ["Capstone", "A mini landing zone for a small company", "All domains", "about $0.15 an hour"],
];

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="Reading about Azure is not the same as running it. These 12 labs and a capstone are free on GitHub. Each one is a real work ticket with scripts that build it, check it and delete it."
    >
      <h2 style={{ marginTop: 0 }}>What makes these labs different</h2>
      <ul>
        <li><strong>Written as tickets.</strong> Each lab is a task a junior Azure administrator gets in the first months on the job, not a click-along demo.</li>
        <li><strong>Three scripts per lab.</strong> <code>deploy.sh</code> builds it, <code>verify.sh</code> prints PASS or FAIL for each check, and <code>cleanup.sh</code> deletes everything it made.</li>
        <li><strong>Tested live.</strong> All 12 labs and the capstone were run end to end in a real Azure subscription in November 2026.</li>
        <li><strong>Built to keep costs tiny.</strong> Every lab lives in one resource group, and a setup script adds a US$20 monthly budget alert before you start.</li>
      </ul>

      <h2>The labs</h2>
      <p className="note">Costs are rough US dollar estimates if you delete the lab the same day. Prices change, so keep the budget alert on.</p>
      <div className="tbl"><table>
        <thead><tr><th>#</th><th>Ticket</th><th>Exam area</th><th>Rough cost</th></tr></thead>
        <tbody>
          {labs.map(([n, t, a, c]) => (
            <tr key={n}><td>{n}</td><td>{t}</td><td>{a}</td><td>{c}</td></tr>
          ))}
        </tbody>
      </table></div>

      <h2>How to run a lab</h2>
      <p>
        The easiest place is Azure Cloud Shell (bash) in the Azure portal: it is already signed
        in and has the Azure CLI. Use a subscription you are allowed to break, never your
        employer&apos;s production one.
      </p>
      <Cmd lines={[
        "git clone https://github.com/azureawscert-a11y/az104-field-labs.git",
        "cd az104-field-labs",
        "chmod +x labs/*/*.sh capstone/*.sh tools/*.sh",
        "",
        ["EMAIL=you@example.com bash tools/setup-subscription.sh", "once: providers + budget alert"],
        ["bash tools/check-region.sh", "once: finds a region and VM size you can use"],
        "",
        "cd labs/03-storage-sas-lifecycle",
        ["cat README.md", "read the ticket first"],
        ["./deploy.sh", "build it"],
        ["./verify.sh", "PASS / FAIL: explain the result"],
        ["./cleanup.sh", "delete it the same day"],
      ]} />
      <p>
        Then do the part that teaches you the most: read <code>deploy.sh</code>, delete the lab,
        and rebuild it by typing the commands yourself.
      </p>

      <div className="callout">
        <p>
          <strong>Blocked by &ldquo;SkuNotAvailable&rdquo; or &ldquo;QuotaExceeded&rdquo;?</strong> New subscriptions
          are often blocked from small VM sizes in busy regions. In our own test on a new
          Pay-As-You-Go subscription, Canada Central allowed none of the lab VM sizes,
          while Canada East, East US and West US 2 did. <code>check-region.sh</code> finds a
          region that works for you without creating anything.
        </p>
      </div>

      <h2>Do the labs count for the exam?</h2>
      <p>
        AZ-104 questions are written for people who have done the work: which command,
        which setting, what happens next. Doing each task once by script and once by hand
        is the fastest way to make that stick. The labs also give you something real to
        talk about in an interview: what you built, what broke, and how you fixed it.
      </p>
      <p>
        New to the Azure CLI? Start with <Link href="/learn/read-azure-cli">how to read any Azure CLI command</Link>.
        The labs are free in <a href={site.labsRepo}>the az104-field-labs repo</a>, with or without the book.
      </p>
    </Article>
  );
}
