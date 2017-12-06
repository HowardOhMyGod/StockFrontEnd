import mainAsk from './survey/mainAsk.vue'
import Survey from './survey/survey.vue'
import surveyResult from './survey/surveyResult.vue'
import Strategy from './strategy/chooseStra.vue'
import TechIntro from './strategy/straIntro/techIntro.vue'
import TechOpt from './strategy/tech/techOpt.vue'
import TechResult from './strategy/tech/techResult.vue'

export const routes = [{
  'path': '',
  redirect: {
    path: '/main'
  }
},{
  'path': '/main',
  component: mainAsk
},{
  'path': '/survey',
  component: Survey
},{
  'path': '/surveyResult/:level',
  component: surveyResult
},{
  'path': '/strategy',
  component: Strategy
},{
  'path': '/strategyIntro/techIntro',
  component: TechIntro
},{
  path: '/tech/options',
  component: TechOpt
},{
  path: '/tech/result',
  component: TechResult
}]
