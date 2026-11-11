import type { Metadata } from "next";
import Link from "next/link";
import CommandAnatomy from "@/components/CommandAnatomy";

export const metadata: Metadata = {
  title: "How to read any Azure CLI command",
  description: "Every az command follows one pattern: tool, what you manage, action, then details. Learn to read Azure CLI and PowerShell commands you have never seen.",
  alternates: { canonical: "/learn/read-azure-cli" },
};

export default function Lesson() {
  return (
    <div className="wrap prose">
      <div className="page-head">
        <p className="note"><Link href="/learn">Learn</Link> / Lesson</p>
        <h1>How to read any Azure CLI command</h1>
        <p className="lede">
          Azure has thousands of commands. You do not memorize them. You learn the
          one sentence they all follow, then you read them like English.
        </p>
      </div>

      <h2 style={{ marginTop: 0 }}>The pattern</h2>
      <p>
        Every command is the same sentence: <strong>az</strong>, then <strong>what</strong> you
        are working on, then the <strong>action</strong>, then the <strong>details</strong>.
        Pick a tab below and read each one out loud.
      </p>
      <div style={{ maxWidth: "720px", margin: "1.5rem 0 2rem" }}><CommandAnatomy /></div>

      <h2>Details come in pairs</h2>
      <p>
        A detail is a question and your answer. <code>--name</code> asks &ldquo;which one?&rdquo;
        and <code>vm-web01</code> answers it. Most questions also have a short form:
      </p>
      <pre className="cmd">{`az vm show --resource-group rg-app --name vm-web01
az vm show -g rg-app -n vm-web01        `}<span className="c"># same command, short flags</span></pre>

      <h2>Stuck? Ask the command</h2>
      <p>Add <code>--help</code> to any part of a command and Azure lists what can come next.</p>
      <pre className="cmd">{`az network --help             `}<span className="c"># what lives under network</span>{`
az network vnet --help        `}<span className="c"># what you can do with a VNet</span>{`
az network vnet create --help `}<span className="c"># every question create can ask</span></pre>

      <h2>Make the answer readable</h2>
      <p>By default Azure answers in JSON. Two flags turn that into something you can scan.</p>
      <pre className="cmd">{`az vm list --output table                   `}<span className="c"># a table instead of JSON</span>{`
az vm list --query "[].name" --output tsv   `}<span className="c"># only the VM names</span></pre>
      <p>
        When a command creates something, look for
        <code> &quot;provisioningState&quot;: &quot;Succeeded&quot;</code> in the answer. That line means Azure built it.
      </p>

      <h2>PowerShell says the same thing</h2>
      <p>
        Azure PowerShell flips the order to action first: a verb, then <code>Az</code> and the
        thing. The questions start with one dash instead of two.
      </p>
      <pre className="cmd">{`az group create --name rg-lab --location canadacentral            `}<span className="c"># Azure CLI</span>{`
New-AzResourceGroup -Name rg-lab -Location canadacentral          `}<span className="c"># PowerShell</span>{`

az vm list                                                        `}<span className="c"># Azure CLI</span>{`
Get-AzVM                                                          `}<span className="c"># PowerShell</span></pre>

      <h2>Try it</h2>
      <p>Open Azure Cloud Shell and read these before you run them. None of them changes anything.</p>
      <pre className="cmd">{`az account show --output table
az group list --output table
az vm list-sizes --location canadacentral --output table`}</pre>

      <div className="card" style={{ margin: "3rem 0 0", maxWidth: "720px" }}>
        <h3>Want the full version?</h3>
        <p>
          This lesson is a short version of Chapter 2 of the AZ-104 Field Guide. That
          chapter is in the free sample, along with the first workplace lab.
        </p>
        <Link className="foot" href="/books/az-104#sample">Get the free sample</Link>
      </div>
    </div>
  );
}
