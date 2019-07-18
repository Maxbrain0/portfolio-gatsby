// these styles neeed to be available apriori so icons are initially loaded with the correct size
import "@fortawesome/fontawesome-svg-core/styles.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faExternalLinkAlt,
  faPhotoVideo,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faExternalLinkAlt,
  faGithub,
  faPhotoVideo,
  faEnvelope,
  faLinkedin,
  faTwitter
)
