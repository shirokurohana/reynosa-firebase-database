import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

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
    <Layout entry>
      <div class="card text-center">
        <div class="card-body text-center">
          <h5 class="card-title text-center">Hi my name is: {itemData.data.name}</h5>
          <p class="card-text">I'm {itemData.data.age} years old</p>
          <p class="card-text">My favorite hobby is: {itemData.data.hobby}</p>
          <p class="card-text">{itemData.data.birthdate}</p>
          <p class="card-text">{itemData.data.favorite_animal}</p>
          <p class="card-text">{itemData.data.favorite_food}</p>
          <p class="card-text">{itemData.data.favorite_verse_1}</p>
          <a href="#" class="btn btn-primary">Nice to meet you!</a>
        </div>
      </div>
    </Layout>
  );
}