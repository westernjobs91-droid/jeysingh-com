// A command, then every piece of it explained in plain English, like the books do.
// kind sets the colour: tool, what (the thing you manage), act (the action),
// flag (a question the command asks), val (your answer), other (anything else).
import Cmd from "@/components/Cmd";

type Line = string | [string, string];
type Part = { code: string; kind: "tool" | "what" | "act" | "flag" | "val" | "other"; says: string };

export default function Explain({ lines, parts, say }: { lines: Line[]; parts: Part[]; say?: string }) {
  return (
    <div className="explain">
      <Cmd lines={lines} />
      <p className="explain-head">Piece by piece</p>
      <dl>
        {parts.map((p, i) => (
          <div key={i} className={`t-${p.kind}`}>
            <dt><code>{p.code}</code></dt>
            <dd>{p.says}</dd>
          </div>
        ))}
      </dl>
      {say && <p className="say">Say it: &ldquo;{say}&rdquo;</p>}
    </div>
  );
}
