import Link from "next/link";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";
import { getDocsListBySection } from "~/services";

export default function Page({ docs }) {
	return (
		<Layout>
			<div id="sidebar"></div>
			<Content id="content">
				<h1>Foundations</h1>

				{docs.map((doc) => (
					<div key={doc.slug}>
						<Link href={doc.slug} forceHref>
							<a>
								<h2>{doc.data.title}</h2>
							</a>
						</Link>
					</div>
				))}
			</Content>
		</Layout>
	);
}

export const getStaticProps = async ({ params }) => {
	const docs = getDocsListBySection("foundations");

	return {
		props: {
			docs,
		},
	};
};
