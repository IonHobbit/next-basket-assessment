import { Metadata } from "next";
import ProductPage from "./page";
import { headers } from "next/headers";
type Props = {
  params: { id: string }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params: { id } } = props;

  const host = headers().get('host');
  const protocol = headers().get('x-forwarded-proto');

  const response = await fetch(`https://dummyjson.com/product/${id}`);
  const data = await response.json();

  const product = data as ProductI;

  if (!product) {
    const seoTitle = 'Product not found';

    return {
      title: seoTitle,
      openGraph: {
        title: seoTitle,
        url: `${protocol}://${host}/product/${id}`,
        type: 'website',
        siteName: 'Bandage',
      },
      twitter: {
        title: seoTitle,
        card: 'summary_large_image',
      }
    }
  }

  const seoTitle = `${product.title} | Bandage`;
  const seoDescription = `Order ${product.title} from Bandage.`;

  const metadata: Metadata = {
    metadataBase: new URL(`${protocol}://${host}`),
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: product.images,
      url: `${protocol}://${host}/product/${id}`,
      type: 'website',
      siteName: 'Bandage',
    },
    twitter: {
      title: seoTitle,
      card: 'summary_large_image',
      description: seoDescription,
      images: product.images,
    }
  }

  return metadata;
}


export default ProductPage;