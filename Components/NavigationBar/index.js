import styles from "../../styles/Home.module.css";
import { Menu, Button, Container, Dropdown } from "semantic-ui-react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <Menu inverted>
        <Container>
          <Menu.Item as="a">
            <Link className="item" href="/">
              home
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Link className="item" href="/blog">
              Blog
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Link className="item" href="/aboutme">
              About Me
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Link className="item" href="/apps">
              Apps
            </Link>
          </Menu.Item>

          <Dropdown item simple text="Links">
            <Dropdown.Menu>
              <Dropdown.Item>Podcasts I Listen to</Dropdown.Item>
              <Dropdown.Item>Sites I Find useful</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>More of my stuff</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </div>
  );
}
