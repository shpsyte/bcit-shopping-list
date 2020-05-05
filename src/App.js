import React, { Component } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import './App.css';
import Form from './components/Form';
import Input from './components/input';
import Button from './components/Button';
import { orderList } from './utils/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemShopping: '',
      listShopping: [{ time: '', qtd: 1, name: '' }],
      order: 'asc',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  // componentDidMount() {
  //   const listShopping = localStorage.getItem('@BCITShoppingList:listShopping');

  //   if (listShopping) {
  //     this.setState({
  //       listShopping: JSON.parse(listShopping),
  //     });
  //   }
  // }

  handleOrder(column) {
    const { listShopping, order } = this.state;

    // hate this!!!! /// refactor!!!
    orderList(listShopping, order, column);

    this.setState({
      order: order === 'asc' ? 'desc' : 'asc',
      listShopping,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { listShopping, itemShopping } = this.state;
    const index = listShopping.findIndex((a) => a.name === itemShopping);

    if (itemShopping) {
      if (index >= 0) {
        this.handleIncrease(index);
      } else {
        this.handleAddToList(itemShopping);
      }

      this.setState({
        itemShopping: '',
      });
    }
  }

  createOrAdd(item) {
    const { listShopping, itemShopping } = this.state;
    const index = listShopping.findIndex((a) => a.name === itemShopping);

    if (index >= 0) {
      listShopping[index].qtd += 1;
    } else {
      listShopping.push(item);
    }

    this.setState({
      listShopping,
    });
  }

  handleAddToList(listItem) {
    const { listShopping } = this.state;
    const item = {
      time: new Date().toLocaleTimeString(),
      qtd: 1,
      name: listItem,
    };

    listShopping.push(item);

    this.setState({
      listShopping,
    });
  }

  handleIncrease(index) {
    const { listShopping } = this.state;

    listShopping[index].qtd += 1;
    listShopping[index].time = new Date().toLocaleTimeString();

    this.setState({
      listShopping,
    });
  }

  handleDelete(itemList) {
    const { listShopping } = this.state;
    const index = listShopping.findIndex((a) => a.name === itemList);

    if (index >= 0) {
      listShopping.splice(index, 1);
      this.setState({
        listShopping,
      });
    }
  }

  render() {
    const { itemShopping, listShopping, order } = this.state;
    return (
      <div className="container">
        <Form action="" onSubmit={this.handleSubmit}>
          <Input
            onChange={(e) => {
              this.setState({ itemShopping: e.target.value });
            }}
            value={itemShopping}
            type="text"
            placeholder="shopping list"
          />

          <Button type="submit">Add to Shopping list</Button>
        </Form>
        <table>
          <thead>
            <tr className="caption">
              <th
                onClick={() => {
                  this.handleOrder(1);
                }}
              >
                Time
                {order === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
              </th>
              <th
                onClick={() => {
                  this.handleOrder(2);
                }}
              >
                Name
                {order === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
              </th>
              <th
                onClick={() => {
                  this.handleOrder(3);
                }}
              >
                Qtd
                {order === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listShopping &&
              listShopping.map((item) =>
                item.name ? (
                  <tr key={item.name}>
                    <td>{item.time}</td>
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
                ) : null,
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
