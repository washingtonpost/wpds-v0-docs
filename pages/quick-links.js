import Link from "next/link";
import Layout from "~/components/Layout/WithSidebar";
import Content from "~/components/Layout/Components/Content";

const repoLinks = [
  {
    href: "https://github.com/WPMedia/wpds-assets-manager",
    label: "Assets Manager"
  },
  {
    href: "https://github.com/WPMedia/wpds-ui-kit",
    label: "UI Kit"
  },
  {
    href: "https://github.com/WPMedia/WPDS-Figma-plugins",
    label: "Figma Plugins"
  }
];

export default function Page() {
  return (
    <Layout>
      <div id="sidebar"></div>
      <Content id="content">
        <h1>Quick Links</h1>

        <h2>Repos</h2>

        <ul>
          {repoLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} forceHref>
                <a>
                  <h3>{link.label}</h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </Layout>
  );
}
