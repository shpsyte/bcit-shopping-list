import React, { Component } from 'react';
// import Button from '../Button';
import './styles.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props,
    };
  }

  render() {
    const { items } = this.state;

    return (
      <table>
        <tr className="caption">
          <th>Name</th>
          <th>Qtd</th>
          <th>Action</th>
        </tr>
        {items.children.map((a) => a.name)}
        {/* <tbody>
          {items &&
            items.map(
              (item) =>
                item.name && (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.qtd}</td>
                    <td>
                      <Button
                        className="delete"
                        onClick={() => {
                          this.handleDelete(item.name);
                        }}
                        type="button"
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                ),
            )}
        </tbody> */}
      </table>
    );
  }
}

export default List;
