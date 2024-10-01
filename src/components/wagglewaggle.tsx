import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './error-page';
import HeadTagEditor from './head-tag-editor';
import { BG_COLOR } from '../constants';
import CompanyPerformanceCard from './company-performance-card';
import ExternalProjectCard from './external-project-card';
import BlogCard from './blog-card';
import { useEffect, useState } from 'react';
import { SanitizedConfig } from '../interfaces/sanitized-config.tsx';
import { getInitialTheme, getSanitizedConfig, setupHotjar } from '../utils';
import { DEFAULT_THEMES } from '../constants/default-themes.tsx';
import { CustomError, INVALID_CONFIG_ERROR } from '../constants/errors.tsx';

const WaggleWaggle = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            <HeadTagEditor
              googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
              appliedTheme={theme}
            />
            <div className={`p-4 lg:p-10 min-h-full ${BG_COLOR}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-2 col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {sanitizedConfig.companyPerformances.length !== 0 && (
                      <CompanyPerformanceCard
                        loading={loading}
                        companyPerformances={
                          sanitizedConfig.companyPerformances
                        }
                      />
                    )}
                    {sanitizedConfig.projects.external.projects.length !==
                      0 && (
                      <ExternalProjectCard
                        loading={loading}
                        header={sanitizedConfig.projects.external.header}
                        externalProjects={
                          sanitizedConfig.projects.external.projects
                        }
                        googleAnalyticId={sanitizedConfig.googleAnalytics.id}
                      />
                    )}
                    {sanitizedConfig.blog.display && (
                      <BlogCard
                        loading={loading}
                        googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                        blog={sanitizedConfig.blog}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default WaggleWaggle;
