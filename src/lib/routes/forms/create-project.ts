export enum ECreateProjectStepName {
  chooseTemplate = 'Choose Template',
  projectConfig = 'Project Configuration',
  customize = 'Customize',
  review = 'Review'
}

export enum ECreateProjectStepPath {
  chooseTemplate = 'choose-template',
  projectConfig = 'project-config',
  customize = 'customize',
  review = 'review'
}

export const createProjectRoutes = [
  {
    name: ECreateProjectStepName.chooseTemplate,
    path: ECreateProjectStepPath.chooseTemplate
  },
  {
    name: ECreateProjectStepName.projectConfig,
    path: ECreateProjectStepPath.projectConfig
  },
  {
    name: ECreateProjectStepName.customize,
    path: ECreateProjectStepPath.customize
  },
  {
    name: ECreateProjectStepName.review,
    path: ECreateProjectStepPath.review
  }
];
