import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import { Menu } from "antd"
import "./globals.css";
import Link from "next/link";

const items = [
  { key: "home", label: <Link href={"/"}>E-liquid Store</Link>},
  { key: "eliquids", label: <Link href={"/eliquids"}>Жижы</Link>},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Header>
            <Menu theme="dark" mode="horizontal" items = {items} style={{flex: 1, minWidth: 0}}/>
          </Header>
          <Content style={{ padding: "0 48px"}}> {children} </Content>
          <Footer style={{textAlign: "center"}}>
            Магазин электронных жидкостей и нагревательных устройств
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
