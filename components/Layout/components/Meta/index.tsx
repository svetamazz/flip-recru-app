import Head from 'next/head'

export interface IMetaData {
  title?: string
  ogTitle?: string
  description?: string
  ogDescription?: string
  canonical?: string
  ogType?: string
  image?: string
}

const Meta = ({
  title,
  description,
  ogTitle,
  ogDescription,
  canonical,
  ogType,
  image,
}: IMetaData) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title ?? title} />
      <meta property="twitter:site" content="@starwars" />
      <meta property="twitter:creator" content="@starwars" />
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content="Star Wars Planets 🚀" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Star Wars Planets 🚀',
  description:
    'Navigate through Star Wars Planets with our Navigation System 🚀',
  ogType: 'website',
  image: process.env.NEXT_PUBLIC_WEBSITE_URL + 'assets/default-meta.jpeg',
}

export default Meta
