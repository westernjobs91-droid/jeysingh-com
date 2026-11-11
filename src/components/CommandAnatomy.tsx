"use client";
import { useState } from "react";

type Tok = { t: "tool" | "what" | "act" | "flag" | "val"; code: string; label: string };
type Cmd = { tab: string; toks: Tok[]; say: string; out: string; ok: string };

const cmds: Cmd[] = [
  {
    tab: "RBAC",
    toks: [
      { t: "tool", code: "az", label: "tool" },
      { t: "what", code: "role assignment", label: "what you manage" },
      { t: "act", code: "create", label: "action" },
      { t: "flag", code: "--role", label: "asks: which role?" },
      { t: "val", code: "Reader", label: "your answer" },
      { t: "flag", code: "--assignee", label: "asks: for whom?" },
      { t: "val", code: "priya@contoso.com", label: "your answer" },
    ],
    say: "Azure, in role assignments: create one that gives Priya the Reader role.",
    out: '{\n  "principalName": "priya@contoso.com",\n  "roleDefinitionName": ',
    ok: '"Reader"',
  },
  {
    tab: "Compute",
    toks: [
      { t: "tool", code: "az", label: "tool" },
      { t: "what", code: "vm", label: "what you manage" },
      { t: "act", code: "resize", label: "action" },
      { t: "flag", code: "--name", label: "asks: which VM?" },
      { t: "val", code: "vm-web01", label: "your answer" },
      { t: "flag", code: "--size", label: "asks: what size?" },
      { t: "val", code: "Standard_D2als_v6", label: "your answer" },
    ],
    say: "Azure, in virtual machines: resize vm-web01 to a D2als v6.",
    out: '{\n  "name": "vm-web01",\n  "provisioningState": ',
    ok: '"Succeeded"',
  },
  {
    tab: "Storage",
    toks: [
      { t: "tool", code: "az", label: "tool" },
      { t: "what", code: "storage account", label: "what you manage" },
      { t: "act", code: "create", label: "action" },
      { t: "flag", code: "--name", label: "asks: called what?" },
      { t: "val", code: "stfinance01", label: "your answer" },
      { t: "flag", code: "--sku", label: "asks: how many copies?" },
      { t: "val", code: "Standard_GRS", label: "your answer" },
    ],
    say: "Azure, in storage accounts: create stfinance01 with copies in a second region.",
    out: '{\n  "name": "stfinance01",\n  "provisioningState": ',
    ok: '"Succeeded"',
  },
];

export default function CommandAnatomy() {
  const [i, setI] = useState(0);
  const c = cmds[i];
  return (
    <div className="term" aria-label="An Azure CLI command with each part labelled">
      <div className="term-bar">
        <b /><b /><b />
        <span>cloud shell</span>
      </div>
      <div className="term-body">
        <div className="anat" key={i}>
          {c.toks.map((k, n) => (
            <div key={n} className={`tok t-${k.t}`} style={{ animationDelay: `${n * 0.12}s` }}>
              <code>{k.code}</code>
              <small><em>{k.label}</em></small>
            </div>
          ))}
        </div>
        <p className="say">Say it: &ldquo;{c.say}&rdquo;</p>
        <div className="out">{c.out}<b>{c.ok}</b>{"\n}"}</div>
      </div>
      <div className="term-tabs">
        {cmds.map((x, n) => (
          <button key={x.tab} aria-pressed={n === i} onClick={() => setI(n)}>
            {x.tab}
          </button>
        ))}
      </div>
    </div>
  );
}
