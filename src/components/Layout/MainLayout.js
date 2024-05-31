import { Footer, Header } from "./";
import React from "react";
class MainLayout extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <main>
          <Header />
          {children}
          <Footer />
      </main>
    );
  }
}

export default MainLayout;
