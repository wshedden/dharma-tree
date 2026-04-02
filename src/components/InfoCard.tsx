interface InfoCardProps {
  title: string;
  body: string;
}

export const InfoCard = ({ title, body }: InfoCardProps) => (
  <article className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
    <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
  </article>
);
