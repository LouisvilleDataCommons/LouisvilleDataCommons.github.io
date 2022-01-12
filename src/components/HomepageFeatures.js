import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Document',
    Svg: require('../../static/img/undraw_text_files_au1q.svg').default,
    description: (
      <>
        Data sets are provided local individuals and organizations to provide a wide-ranging record of our city, in an effort to guide prospective and current residents.
      </>
    ),
  },
  {
    title: 'Environment',
    Svg: require('../../static/img/undraw_environment_iaus.svg').default,
    description: (
      <>
       High quality data about our environment helps to make best use of our shared community resources.
      </>
    ),
  },
  {
    title: 'Community Data',
    Svg: require('../../static/img/undraw_city_life_gnpr.svg').default,
    description: (
      <>
      Data available on the site is managed by a multistakeholder group of community volunteers who seek to build trust with the institutions that wish to use it.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
