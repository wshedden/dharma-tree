interface InfoCardProps {
  title: string
  body: string
}

const InfoCard = ({ title, body }: InfoCardProps) => {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/55 p-4">
      <h4 className="text-sm font-semibold text-cyan-200">{title}</h4>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </article>
  )
}

export default InfoCard
