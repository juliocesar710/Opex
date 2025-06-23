import { useI18n } from '../i18n'

export default function IntroSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white dark:bg-gray-800 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t('intro.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          {t('intro.description')}
        </p>
      </div>
    </section>
  )
}
