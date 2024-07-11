import { useRouter } from "next/router";
// Gera algumas páginas na build e o restante server-side salvo no cache
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  await delay(5000);
  const id = context.params.id;
  return {
    props: {
      id: id,
    },
  };
}

/* Server-Side 
 export async function getServerSideProps(context) {
   const id = context.query.id;
   return {
     props: {
       id: id,
     },
   };
 }
*/

function Produtos(props) {
  /* Client-side
    const router = useRouter();
    const id = router.query.id;
  */
  return <div> Id do Produto: {props.id} </div>;
}

export default Produtos;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
