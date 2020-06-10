import React from "react"

// icon imports
import AkkaIcon from "../../assets/svg/akka-icon.svg"
import AWSIcon from "../../assets/svg/aws.svg"
import BrandIcon from "../../assets/svg/brand.svg"
import BulmaIcon from "../../assets/svg/bulma.svg"
import CsharpIcon from "../../assets/svg/csharp.svg"
import D3Icon from "../../assets/svg/d3js-icon.svg"
import DartIcon from "../../assets/svg/dartlang-icon.svg"
import EchoIcon from "../../assets/svg/echo-logo.svg"
import ExpressIcon from "../../assets/svg/expressjs-icon.svg"
import FlutterIcon from "../../assets/svg/flutterio-icon.svg"
import GatsbyIcon from "../../assets/svg/gatsbyjs-icon.svg"
import GhostIcon from "../../assets/svg/ghost-tile.svg"
import GCIcon from "../../assets/svg/google-cloud.svg"
import GoIcon from "../../assets/svg/golang-official.svg"
import GraphQLIcon from "../../assets/svg/graphql.svg"
import HandlebarsIcon from "../../assets/svg/handlebarsjs-icon.svg"
import JavascriptIcon from "../../assets/svg/javascript.svg"
import JestIcon from "../../assets/svg/jestjsio.svg"
import MongoIcon from "../../assets/svg/mongodb.svg"
import NextJSIcon from "../../assets/svg/nextjs.svg"
import NpmIcon from "../../assets/svg/npmjs-ar21.svg"
import NodeIcon from "../../assets/svg/nodejs-icon.svg"
import NuxtIcon from "../../assets/svg/nuxt-square.svg"
import ParcelIcon from "../../assets/svg/parceljs-rect.svg"
import PostgresIcon from "../../assets/svg/postgresql.svg"
import PrismaIcon from "../../assets/svg/prisma.svg"
import PythonIcon from "../../assets/svg/python-icon.svg"
import ReactIcon from "../../assets/svg/reactjs-icon.svg"
import RedisIcon from "../../assets/svg/redis.svg"
import SassIcon from "../../assets/svg/sass-lang-icon.svg"
import ScalaIcon from "../../assets/svg/scala-lang-icon.svg"
import TypeORMIcon from "../../assets/svg/typeorm.svg"
import TypeScriptIcon from "../../assets/svg/typescriptlang-icon.svg"
import VueIcon from "../../assets/svg/vue.svg"
import VuetifyIcon from "../../assets/svg/vuetify.svg"

const Icon = props => {
  const components = {
    akka: { icon: AkkaIcon, url: "https://akka.io/" },
    aws: { icon: AWSIcon, url: "https://aws.amazon.com/" },
    brand: { icon: BrandIcon, url: null },
    bulma: { icon: BulmaIcon, url: "https://bulma.io/" },
    csharp: {
      icon: CsharpIcon,
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    d3: { icon: D3Icon, url: "https://d3js.org/" },
    dart: { icon: DartIcon, url: "https://dart.dev/" },
    echo: { icon: EchoIcon, url: "https://echo.labstack.com/" },
    express: { icon: ExpressIcon, url: "https://expressjs.com/" },
    flutter: { icon: FlutterIcon, url: "https://flutter.dev/" },
    gatsby: { icon: GatsbyIcon, url: "https://www.gatsbyjs.org/" },
    ghost: { icon: GhostIcon, url: "https://ghost.org/" },
    gc: { icon: GCIcon, url: "https://cloud.google.com/" },
    go: { icon: GoIcon, url: "https://golang.org/" },
    graphql: { icon: GraphQLIcon, url: "https://graphql.org/" },
    handlebars: { icon: HandlebarsIcon, url: "https://handlebarsjs.com/" },
    javascript: {
      icon: JavascriptIcon,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    jest: {
      icon: JestIcon,
      url: "https://jestjs.io/",
    },
    mongo: { icon: MongoIcon, url: "https://www.mongodb.com/" },
    nextjs: { icon: NextJSIcon, url: "https://nextjs.org/" },
    node: { icon: NodeIcon, url: "https://nodejs.org/en/" },
    npm: { icon: NpmIcon, url: "https://www.npmjs.com/" },
    nuxt: { icon: NuxtIcon, url: "https://nuxtjs.org/" },
    parcel: { icon: ParcelIcon, url: "https://parceljs.org/" },
    postgres: { icon: PostgresIcon, url: "https://www.postgresql.org/" },
    prisma: { icon: PrismaIcon, url: "https://www.prisma.io/" },
    python: { icon: PythonIcon, url: "https://www.python.org/" },
    react: { icon: ReactIcon, url: "https://reactjs.org/" },
    redis: { icon: RedisIcon, url: "https://redis.io/" },
    sass: { icon: SassIcon, url: "https://sass-lang.com/" },
    scala: { icon: ScalaIcon, url: "https://www.scala-lang.org/" },
    typeorm: { icon: TypeORMIcon, url: "https://typeorm.io/#/" },
    typescript: {
      icon: TypeScriptIcon,
      url: "https://www.typescriptlang.org/",
    },
    vue: { icon: VueIcon, url: "https://vuejs.org/" },
    vuetify: { icon: VuetifyIcon, url: "https://vuetifyjs.com/en/" },
  }

  if (!components[props.type]) {
    return null
  }

  const IconName = components[props.type].icon

  if (!components[props.type].url) {
    return <IconName />
  }

  // get passed down classes
  return (
    <a
      href={components[props.type].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconName />
    </a>
  )
}

export default Icon
