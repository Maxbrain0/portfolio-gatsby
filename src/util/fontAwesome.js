// these styles neeed to be available apriori so icons are initially loaded with the correct size
import "@fortawesome/fontawesome-svg-core/styles.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAddressCard,
  faUserTie,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons"

library.add(faAddressCard, faUserTie, faEnvelope, faBriefcase)
