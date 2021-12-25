import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Document',
    Svg: require('../../static/img/undraw_text_files_au1q.svg').default,
    description: (
      <>
        Bacon ipsum dolor amet sirloin prosciutto pastrami, ribeye brisket filet mignon.
        Swine short ribs spare ribs capicola leberkas andouille burgdoggen pancetta picanha.
      </>
    ),
  },
  {
    title: 'Environment',
    Svg: require('../../static/img/undraw_environment_iaus.svg').default,
    description: (
      <>
       Filet mignon short loin anim strip steak est eu buffalo pork loin ball tip aute consequat pancetta.
       Eiusmod pork chop non chuck pancetta, velit filet mignon aliquip nisi ut alcatra bacon cupim incididunt.
      </>
    ),
  },
  {
    title: 'Community Data',
    Svg: require('../../static/img/undraw_city_life_gnpr.svg').default,
    description: (
      <>
        Pastrami non consequat beef.
        Adipisicing sirloin drumstick chislic, occaecat esse meatball ham hock sausage consequat fatback jowl.
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
