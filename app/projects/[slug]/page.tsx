import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24 py-20 border-l border-r border-charcoal">
        <Link
          href="/"
          className="inline-flex items-center font-mono text-sm text-charcoal/60 hover:text-charcoal mb-12 transition-colors"
        >
          <span className="mr-2">←</span>
          Back
        </Link>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
          {project.title}
        </h1>
        <p className="font-mono text-base text-charcoal/60 mb-12">{project.date}</p>

        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-12 border-t border-b border-charcoal py-4">
            <p className="font-mono text-sm text-charcoal">
              <span className="text-charcoal/60">TECH:</span> {project.techStack.join(', ')}
            </p>
          </div>
        )}

        <div className="font-mono text-base text-charcoal leading-relaxed">
          <p>Project details coming soon...</p>
        </div>
      </div>
    </div>
  )
}