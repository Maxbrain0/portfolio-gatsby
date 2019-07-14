import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const icons = data.allProjectsJson.edges.map((edge, index) => {
    const lib = edge.node.technology_icons[0].lib
    const name = edge.node.technology_icons[0].name

    return <FontAwesomeIcon key={index} icon={[lib, name]} />
  })

  return (
    <Layout>
      <h1>Portfolio</h1>
      {icons}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        aperiam. Recusandae provident blanditiis explicabo distinctio qui
        eveniet, deleniti vero cupiditate molestiae inventore ducimus quas
        suscipit consequuntur porro quo, non a. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Obcaecati nam quod tempore est deleniti!
        Aut est minima nostrum adipisci iusto sit libero, mollitia vitae sint,
        quas unde ducimus ad eligendi blanditiis omnis necessitatibus tempore ab
        incidunt iure perspiciatis quod culpa eius repellat? Dicta veritatis
        labore maiores laboriosam. Vero doloribus officia accusamus architecto
        voluptates neque sed amet, modi impedit possimus aut sequi eveniet
        laudantium? Ratione assumenda ut nisi autem provident quibusdam nobis
        quae aspernatur, sint quod possimus odit ipsum cupiditate deleniti.
        Porro impedit deserunt nisi, quae esse dicta cumque animi, rerum
        officiis enim illum nulla dignissimos explicabo voluptates itaque
        voluptatibus consequuntur?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloribus
        culpa veniam. Provident mollitia corporis praesentium molestiae ab
        reprehenderit quis pariatur minus aut eveniet. Perferendis consequuntur
        enim quisquam porro ipsam corrupti mollitia similique natus, est qui a
        earum voluptas architecto repellendus aperiam tempore commodi, sint
        vitae incidunt voluptates nam minus in nisi? Impedit, hic corporis quia
        vero, ipsa tenetur, nemo numquam eos excepturi blanditiis id!
        Consequatur, ut alias illo quidem illum nisi. Numquam, aspernatur odit,
        voluptatibus eligendi aut inventore nam eos ratione ipsum voluptate
        explicabo? Mollitia ullam temporibus, adipisci aspernatur est beatae
        nisi error, aliquam voluptatum dignissimos iste perferendis fuga culpa
        id necessitatibus sint quidem quasi. Culpa, explicabo itaque temporibus
        at molestias accusamus dolorem hic maxime esse maiores quibusdam alias
        suscipit possimus asperiores minima sed quo provident ipsam. Saepe
        explicabo qui odit atque unde libero, dolore enim distinctio asperiores
        minus quidem earum sapiente autem tempore hic tempora ipsam voluptas
        facere veritatis sed exercitationem. Minima non impedit quam illum
        ratione dolore, necessitatibus quisquam rerum earum dolores ducimus amet
        facere excepturi tenetur perferendis quis ut iste quae ullam cupiditate.
        Nihil dicta eveniet quidem voluptatum incidunt tenetur earum,
        dignissimos, distinctio architecto, iste dolore exercitationem ipsam
        excepturi accusantium. Officiis ducimus velit molestiae vitae dolorem
        unde voluptate error dolor aperiam possimus sed asperiores veritatis
        labore nisi, iusto amet vel maiores sunt, alias perspiciatis
        voluptatibus fugiat cumque ex! Inventore quos, placeat deleniti est
        expedita blanditiis error, ad nesciunt quia atque doloribus fuga aliquid
        voluptatibus necessitatibus maxime impedit soluta, saepe laboriosam?
        Similique pariatur nihil est rerum ad officia doloribus non repudiandae
        dicta iusto quae qui sed possimus, itaque omnis enim ex sequi vitae ab
        quidem voluptatibus consequuntur aliquam. Libero facilis perferendis ex
        at nobis, est excepturi. Dolorem adipisci eius, quidem libero quas atque
        officia sed iste itaque voluptatem eligendi id necessitatibus impedit
        magni unde, sequi ex reprehenderit odio error placeat assumenda nam
        tempore explicabo perferendis. Fugit, obcaecati, laudantium fuga cumque
        necessitatibus, sequi ab dolore corporis earum quidem tempora saepe
        eligendi voluptatum deleniti. Eaque deleniti veritatis laborum quisquam
        dignissimos excepturi omnis eligendi blanditiis vero praesentium cum
        necessitatibus, deserunt eveniet minima at. Nemo repudiandae veritatis
        vitae, reiciendis tempora animi quam cumque. Ex iste aliquid
        exercitationem dolores, beatae quo dolor rem totam non sapiente quis
        tempore ipsa aperiam sit quibusdam asperiores. Id ipsum laborum odio
        quibusdam minus a reprehenderit iusto obcaecati, dolorum mollitia ut
        tenetur cumque, quidem doloremque voluptate distinctio deserunt rerum
        eius numquam exercitationem officiis, ex accusantium. Error molestias
        laudantium esse neque corrupti ad iste maiores, ipsam reiciendis illo
        aut commodi nam, nihil ipsum harum incidunt aliquid fugiat unde dolorum?
        Dolor, exercitationem quod sed, nobis possimus nemo rem dolorem
        recusandae obcaecati, rerum sint ab debitis sit. Minus nemo et accusamus
        suscipit rerum voluptatem laboriosam eius. Enim non aperiam, dolorem
        corrupti possimus est error ducimus, corporis repellendus voluptatem
        numquam doloremque dignissimos earum? Totam tempore quod explicabo!
        Iusto illo omnis eius non blanditiis impedit, ducimus quae fugiat. Nulla
        et ad tempore, a iure rem dicta modi sed velit provident delectus ipsum
        neque eveniet ab ea veniam rerum reiciendis? Debitis, deleniti
        aspernatur!
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          url
          github_url
          technology_icons {
            lib
            name
          }
        }
      }
    }
  }
`
