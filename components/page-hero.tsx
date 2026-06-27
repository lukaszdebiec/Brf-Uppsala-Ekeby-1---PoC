type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-sidebar">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
