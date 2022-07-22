/* eslint-disable unicorn/consistent-function-scoping */
import { render } from "@testing-library/react";
import React from "react";

describe("Template", () => {
  test("<main>(role=main)", () => {
    const { container } = render(
      <main>
        <h2>Test</h2>
        <button>+1</button>
      </main>,
    );
    expect(container).not.toBeAtom();
    expect(container).not.toBeMolecule();
    expect(container).not.toBeOrganism();
    expect(container).toBeTemplate();
  });
});

// eslint-disable-next-line max-lines-per-function
describe("Organisms", () => {
  const asserts = (container: HTMLElement) => {
    expect(container).not.toBeAtom();
    expect(container).not.toBeMolecule();
    expect(container).toBeOrganism();
    expect(container).not.toBeTemplate();
  };
  test("<aside>(role=complementary)", () => {
    const { container } = render(
      <aside>
        <h2>Test</h2>
        <button>+1</button>
      </aside>,
    );
    asserts(container);
  });
  test("<form>(role=form)", () => {
    const { container } = render(
      <form aria-labelledby="test">
        <h2 id="test">Test</h2>
        <button>+1</button>
      </form>,
    );
    asserts(container);
  });
  test("<form>(role=search)", () => {
    const { container } = render(
      <form role="search">
        <h2>Test</h2>
        <button>+1</button>
      </form>,
    );
    asserts(container);
  });
  test("<nav>(role=navigation)", () => {
    const { container } = render(
      <nav>
        <h2>Test</h2>
        <button>+1</button>
      </nav>,
    );
    asserts(container);
  });
  test("<section>(role=region)", () => {
    const { container } = render(
      <section aria-labelledby="test">
        <h2 id="test">Test</h2>
        <button>+1</button>
      </section>,
    );
    asserts(container);
  });
  test("<div>(role=alertdialog)", () => {
    const { container } = render(
      <div role="alertdialog">
        <h2 id="test">Test</h2>
        <button>+1</button>
      </div>,
    );
    asserts(container);
  });
  test("<div>(role=dialog)", () => {
    const { container } = render(
      <div role="dialog">
        <h2 id="test">Test</h2>
        <button>+1</button>
      </div>,
    );
    asserts(container);
  });
});

// eslint-disable-next-line max-lines-per-function,max-statements
describe("Molecules", () => {
  const asserts = (container: HTMLElement) => {
    expect(container).not.toBeAtom();
    expect(container).toBeMolecule();
    expect(container).not.toBeOrganism();
    expect(container).not.toBeTemplate();
  };
  test("<form>(role=none)", () => {
    const { container } = render(
      <form>
        <h2>Test</h2>
        <button>+1</button>
      </form>,
    );
    asserts(container);
  });
  test("<div>(role=group)", () => {
    const { container } = render(
      <div role="group">
        <h2>Test</h2>
      </div>,
    );
    asserts(container);
  });
  test("<article>(role=artilce)", () => {
    const { container } = render(
      <article>
        <h2>Test</h2>
      </article>,
    );
    asserts(container);
  });
  test("<ul>(role=list)", () => {
    const { container } = render(
      <ul>
        <li></li>
      </ul>,
    );
    asserts(container);
  });
  test("<ol>(role=list)", () => {
    const { container } = render(
      <ol>
        <li></li>
      </ol>,
    );
    asserts(container);
  });
  test("<dl>(role=term)", () => {
    const { container } = render(
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>,
    );
    asserts(container);
  });
  test("<div>(role=tablist)", () => {
    const { container } = render(
      <div role="tablist">
        <p role="tab"></p>
      </div>,
    );
    asserts(container);
  });
  test("<div>(role=tabpanel)", () => {
    const { container } = render(
      <div role="tabpanel">
        <h2>Test</h2>
      </div>,
    );
    asserts(container);
  });
  test("<table>(role=table)", () => {
    const { container } = render(
      <table>
        <thead>
          <tr />
        </thead>
        <tbody>
          <tr />
        </tbody>
      </table>,
    );
    asserts(container);
  });
  test("<select>(role=combobox)", () => {
    const { container } = render(
      <select>
        <option value={0}>A</option>
        <option value={1}>B</option>
      </select>,
    );
    asserts(container);
  });
  test("<section>(multiple roles)", () => {
    const { container } = render(
      <section>
        <h2 id="test">Test</h2>
        <button>+1</button>
      </section>,
    );
    asserts(container);
  });
});

describe("Organisms or Molecules", () => {
  // MEMO: header footer は構成 Node によって AsNonLandmark になりえるため
  const asserts = (container: HTMLElement) => {
    expect(container).not.toBeAtom();
    expect(container).toBeMolecule();
    expect(container).toBeOrganism();
    expect(container).not.toBeTemplate();
  };
  test("<header>(role=banner)", () => {
    const { container } = render(
      <header>
        <h2>Test</h2>
        <button>+1</button>
      </header>,
    );
    asserts(container);
  });
  test("<footer>(role=contentinfo)", () => {
    const { container } = render(
      <footer>
        <h2>Test</h2>
        <button>+1</button>
      </footer>,
    );
    asserts(container);
  });
});

// eslint-disable-next-line max-lines-per-function
describe("Atoms", () => {
  const asserts = (container: HTMLElement) => {
    expect(container).toBeAtom();
    expect(container).not.toBeMolecule();
    expect(container).not.toBeOrganism();
    expect(container).not.toBeTemplate();
  };
  test("<p>(role=none)", () => {
    const { container } = render(<p>test</p>);
    asserts(container);
  });
  test("<h1>(role=heading)", () => {
    const { container } = render(<h1>test</h1>);
    asserts(container);
  });
  test("<a>(role=link)", () => {
    const { container } = render(<a href="#">test</a>);
    asserts(container);
  });
  test("<button>(role=button)", () => {
    const { container } = render(<button>test</button>);
    asserts(container);
  });
  test("<input>(role=textbox)", () => {
    const { container } = render(<input type="text" />);
    asserts(container);
  });
  test("<textarea>(role=textbox)", () => {
    const { container } = render(<textarea />);
    asserts(container);
  });
  test("<div>(single role)", () => {
    const { container } = render(
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="picture" />
        <p>test</p>
      </div>,
    );
    asserts(container);
  });
  test("<label>(role=none)", () => {
    const { container } = render(
      <label>
        <input type="checkbox" id="check" />
        Test
      </label>,
    );
    const { container: htmlFor } = render(
      <React.Fragment>
        <label htmlFor="check">Test</label>
        <input type="checkbox" id="check" />
      </React.Fragment>,
    );
    asserts(container);
    asserts(htmlFor);
  });
  test("text(role=none)", () => {
    const { container } = render(
      <div>
        <p>test</p>
      </div>,
    );
    asserts(container);
  });
});

/* eslint-enable unicorn/consistent-function-scoping */
