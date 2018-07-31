import React, { Component } from "react";
import cn from "classnames";
import axios from "axios";
import update from "immutability-helper";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    console.log(`${this._title} - ${this._text}`);
    console.log(`${this._title.value} - ${this._text.value}`);
    this._title.value = "";
    this._text.value = "";
    this._title.focus();
  }
  render() {
    return (
      <div className="color-form">
        <div className="title">Component: MyForm</div>
        <form onSubmit={this.submit}>
          <input
            ref={input => (this._title = input)}
            type="text"
            placeholder="color title..."
            required
          />
          <input
            ref={input => (this._text = input)}
            type="text"
            placeholder="color text..."
            required
          />
          <button>Add color</button>
        </form>
      </div>
    );
  }
}

export class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
    this.isActive = this.isActive.bind(this);
  }

  isActive(e) {
    this.setState({
      active: e.target.classList.contains("left") ? "left" : "right"
    });
  }

  render() {
    let classNameLeftBtn = cn({
      "btn btn-secondary left": true,
      active: this.state.active === "left"
    });

    let classNameRightBtn = cn({
      "btn btn-secondary right": true,
      active: this.state.active === "right"
    });

    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={classNameLeftBtn}
          onClick={this.isActive}
        >
          Left
        </button>
        <button
          type="button"
          className={classNameRightBtn}
          onClick={this.isActive}
        >
          Right
        </button>
      </div>
    );
  }
}

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 0
    };
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
  }

  nextImg(e) {
    console.log(this.state.img + 1 + " " + this.props.images.length);
    console.log((this.state.img + 1) % this.props.images.length);
    let { img } = this.state;
    this.setState({
      img: ++img > 2 ? 0 : img
    });
  }

  prevImg(e) {
    let { img } = this.state;
    this.setState({
      img: --img < 0 ? 2 : img
    });
  }

  createImg() {
    const { images } = this.props;

    return images.map((img, i) => {
      return (
        <div
          key={i}
          className={cn({
            "carousel-item": true,
            active: this.state.img === i
          })}
        >
          <img
            alt=""
            className="d-block w-100"
            src={require(`../img/${img}`)}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">{this.createImg()}</div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
          onClick={this.prevImg}
        >
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
          onClick={this.nextImg}
        >
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export class Collapse extends Component {
  state = {
      opened: false
  };

  isActive = (e) => {
    e.preventDefault();
    let { opened } = this.state;
    this.setState({
        opened: !opened
    });
  }

  render() {
    let className = cn({
        collapse: true,
        show: this.state.opened
    });
    return (
      <div>
        <p>
          <a className="btn btn-primary" href="#" onClick={this.isActive}>
            Link with href
          </a>
        </p>
        <div className={className}>
          { this.state.opened && <div className="">{this.props.text}</div> }
        </div>
      </div>
    );
  }
}

export default class MyForm extends React.Component {
    state = {
      form: {
        email: "",
        password: "",
        address: "",
        city: "",
        country: "",
        acceptRules: false,
      },
      submitForm: false
    };
  
    backForm = () =>  {
      this.setState({
        submitForm: !this.state.submitForm
      })
    };
  
    showTable = () => {
      let keys = Object.keys(this.state.form).sort();
      return <div>
            <button onClick={this.backForm}>Back</button>
              <table className="table">
                <tbody>
                {keys.map((item, i) => {
                  return (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{this.state.form[item].toString()}</td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
          </div>
    };
  
    changeDataForm = (e) => {
      let { form } = this.state;
      switch(e.target.id){
        case "inputEmail4": 
          this.setState({
            form: { ...form, email: e.target.value }
          });
          break;
        case "inputPassword4": 
          this.setState({
            form: { ...form, password: e.target.value }
          });
          break;
        case "inputAddress": 
          this.setState({
            form: { ...form, address: e.target.value }
          });
          break;
        case "inputCity": 
          this.setState({
            form: { ...form, city: e.target.value }
          });
          break;
        case "inputCountry": 
          this.setState({
            form: { ...form, country: e.target.value }
          });
          break;
        case "rules": 
          this.setState({
            form: { ...form, acceptRules: !this.state.form.acceptRules }
          });
          break;
      }
    };
  
    submit = (e) => {
      e.preventDefault();
      this.setState({
        submitForm: !this.state.submitForm
      });
    }
    showForm() {
       let { form } = this.state;
        return (
            <form onSubmit={this.submit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4" className="col-form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={this.changeDataForm} value={form.email}/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4" className="col-form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={this.changeDataForm} value={form.password}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress" className="col-form-label">Address</label>
                <textarea type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={this.changeDataForm} value={form.address}></textarea>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity" className="col-form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" onChange={this.changeDataForm} value={form.city} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputCountry" className="col-form-label">Country</label>
                  <select id="inputCountry" className="form-control" onChange={this.changeDataForm} value={form.country}>
                    <option>Choose</option>
                    <option value="argentina">Argentina</option>
                    <option value="russia">Russia</option>
                    <option value="china">China</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="rules">
                      <input type="checkbox" id="rules" className="form-check-input" onChange={this.changeDataForm} checked={form.acceptRules}/> Accept Rules 
                    </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
          );
      }
  
      render() {
        return this.state.submitForm ? this.showTable() : this.showForm();
      }
  
}

export default class Component extends React.Component {
  state = { items: [] };

  inc = () => {
    const { items } = this.state;
    const currentValue = items[0] ? items[0].value + 1 : 1;
    const current = { id: _.uniqueId(), value: currentValue };
    this.setState({ items: [current, ...items] });
  }

  dec = () => {
    const { items } = this.state;
    const currentValue = items[0] ? items[0].value - 1 : -1;
    const current = { id: _.uniqueId(), value: currentValue };
    this.setState({ items: [current, ...items] });
  }

  remove = currentId => (e) => {
    e.preventDefault();
    const { items } = this.state;
    this.setState({ items: items.filter(({ id }) => id !== currentId) });
  }

  renderLog() {
    if (this.state.items.length === 0) {
      return null;
    }
    return (
      <ul className="list-group">
        {this.state.items.map(({ id, value }) => (
          <li className="list-group-item" key={id}>
            <a href="#" onClick={this.remove(id)}>{value}</a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button className="btn hexlet-inc" onClick={this.inc}>+</button>
          <button className="btn hexlet-dec" onClick={this.dec}>-</button>
        </div>
        {this.renderLog()}
      </div>
    );
  }
}

export default class TodoBox extends React.Component {

  state = {
    form: {
      text: ""
    },
    task: []
  }

  addTask = e => {
    e.preventDefault();
    const newState = [ { id: uniqueId(), value: this.state.form.text }, ...this.state.task ];
    this.setState({
      task: [...newState],
      form: {
        text: ""
      }
    })
  }

  removeTask = id => e => {
    e.preventDefault();
    const { task } = this.state;
    const newState = task.filter(item => item.id !== id);
    this.setState({
      task: [...newState]
    });
  }

  changeInput = e => {
    this.setState({
      form: {
        text: e.target.value
      }
    });
  }

  render() {
    const { form, task } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form form-inline mx-3" onSubmit={ this.addTask }>
            <div className="form-group">
              <input type="text" value={form.text} onChange={this.changeInput} className="form-control mr-3" placeholder="I am going..."  required/>
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
       <Item task={task} onRemove={this.removeTask}/> 
      </div>
    );
  }
}

export default function Item(props){

  const { task, onRemove } = props;

  function renderTask() {
    return (
         task.map( ({ id, value }) => {
          return (
            <div key={id}>
            <div className="row">
              <div>
                <form className="todo-remove-item-form" action="">
                  <button type="submit" className="btn btn-primary btn-sm" onClick={onRemove(id)}>-</button>
                </form>
              </div>
            <div className="col-10">{value}</div>
            </div>
            <hr />
          </div>
         )})
    );
  }

  return task.length !== 0 && renderTask();
}

export default class ComponentModal extends React.Component {
  state = { modal: false };

  toggle = (e) => {
    e.preventDefault();

    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <button className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={this.state.modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button className="modal-close-button btn btn-default" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default class Modal extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    let { isOpen } = this.props;
    let style = {
      display: isOpen ? "block" : "none"
    };
    let className = cn({
      modal: true,
      "fade show": isOpen
    });
    return (
      <div className={ className } style={ style }>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

Modal.Header = function(props) {
  let { toggle } = props;
  return (
    <div className="modal-header">
        <div className="modal-title">{props.children}</div>
        <button type="button" className="close" onClick={toggle} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
    </div>
  )
}
Modal.Body = function(props) {
  return  <p className="modal-body">{ props.children }</p>
}
Modal.Footer = function(props) {
  return (
    <p className="modal-footer">
      {props.children}
    </p>
  )
}

// Другой синтаксис модального окна
const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">
      {children}
    </div>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

const Body = ({ children }) => <p className="modal-body">{children}</p>;
const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

export default class Modal extends React.Component {
  static defaultProps = {
    isOpen: false,
  };

  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { isOpen } = this.props;

    const classes = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    const style = {
      display: isOpen ? 'block' : 'none',
    };

    return (
      <div className={classes} style={style}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default class Autocomplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      data: null
    };
  }

  onChange = async (e) => {
    const value = e.target.value;
    const res = await axios.get("/countries", { params: { term: `${value}` } });
    
    this.setState({ 
      inputText: value,
      data: res.data 
    });
  }

  render() {
    let { data, inputText } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Country" value={ inputText } onChange={ this.onChange }/>
          </div>
        </form>
        { data && 
        <ul>
         { data.map( item => <li key={item}>{item}</li> ) }
        </ul> }
      </div>
    );
  }
}


export default class TodoBox extends React.Component {
  state = {
    inputText: "",
    tasks: []
  };

  onChangeInput = ( { target } ) => {
    this.setState({
      inputText: target.value
    });
  }

  componentDidMount() {
    axios.get(`${routes.tasksPath()}`)
         .then( ({ data }) => {
            this.setState({
                tasks: [...data]
              });
         });
  }

  addTask = (e) => {
    e.preventDefault();

    let { inputText } = this.state;
    axios.post(`${routes.tasksPath()}`, {
      "text": inputText
    }).then( ({ data }) => {
        this.setState({
          tasks: [data, ...this.state.tasks],
          inputText: ""
        });
    });
  }

  changeStateTask = id => () => {
    const { tasks } = this.state;
    let index = tasks.findIndex(task => task.id === id);

    const changeState = (path) => {
      axios.patch(path)
      .then( ({ data }) => {
          let updateTask = update(tasks, {[index]: {$merge: {state: data.state} } });
          this.setState({
            tasks: [...updateTask]
          })
      });
    }

    return changeState(tasks[index].state === "active" ? routes.finishTaskPath(id) 
                                                       : routes.activateTaskPath(id))
  }

  renderActiveTask() {
    let { tasks } = this.state;
    const activeTask = tasks.filter(task => task.state === "active");

    return activeTask.length !== 0 ? 
       <div className="todo-active-tasks">
        { activeTask.map( task => 
            <Item key={task.id} task={task} changeStateTask={ this.changeStateTask(task.id) } />
        ) }
       </div>
       : null;
  }
  renderFinishedTask() {
    let { tasks } = this.state;
    const finishedTask = tasks.filter(task => task.state === "finished");

    return finishedTask.length !== 0 ?
       <div className="todo-finished-tasks">
        { finishedTask.map( task => 
            <Item key={task.id} task={task} changeStateTask={ this.changeStateTask(task.id) } />
        ) }
       </div>
       : null;
  }

  render() {
    let { inputText, tasks } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form form-inline mx-3" onSubmit={this.addTask}>
            <div className="form-group">
              <input type="text" value={ inputText } onChange={ this.onChangeInput } required className="form-control mr-3" placeholder="I am going..." />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        { this.renderActiveTask() }
        { this.renderFinishedTask() }
      </div>
    )
  }
}

export default function Item({ task, changeStateTask}) {
  const link = <a href="#" className="todo-task" onClick={changeStateTask}>{ task.text }</a>;
  return (
          <div className="row">
            <div className="col-1">{task.id}</div>
            <div className="col">
              { task.state === "finished" ? <s>{ link }</s> : link }
            </div>
          </div>
  );
}

export default class MarkdownEditor extends React.Component {
  componentDidMount() {
    $(this.rootElement).markdown({
      iconlibrary: 'fa',
      onChange: (e) => {
        this.onChange(e);
      },
    });
  }

  onChange = (e) => {
    this.props.onContentChange(e.getContent());
  }

  setRef = (el) => {
    this.rootElement = el;
  }

  render() {
    return <div data-provide='markdown-editable' ref={this.setRef} />;
  }
}