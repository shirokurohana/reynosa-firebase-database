import { getResourceIds, getResourceData } from "../../lib/family-members";

export async function getStaticPaths(){
  const paths = await getResourceIds();
  console.log(paths);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({params}) {
  const itemData = await getResourceData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export default function Entry({itemData}) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{itemData.data.name}</h5>
        <p class="card-text">{itemData.data.age}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}