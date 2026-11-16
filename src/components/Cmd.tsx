// A terminal block. Each line is [what you type or see, optional comment].
type Line = string | [string, string];

export default function Cmd({ lines }: { lines: Line[] }) {
  const width = Math.max(...lines.map(l => (typeof l === "string" ? 0 : l[0].length)));
  return (
    <pre className="cmd">
      {lines.map((l, i) => {
        const nl = i < lines.length - 1 ? "\n" : "";
        if (typeof l === "string") return <span key={i}>{l}{nl}</span>;
        return (
          <span key={i}>
            {l[0].padEnd(width + 2)}
            <span className="c"># {l[1]}</span>
            {nl}
          </span>
        );
      })}
    </pre>
  );
}
