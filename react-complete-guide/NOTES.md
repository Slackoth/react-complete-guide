# Notes
* Way of calling a class method inside JSX:  jsxAttribute={this.functionName}
* Way #1 of passing arguments to a function inside JSX: jsxAttribute={this.functionName.bind(this, ...args)}
* Way #2 of passing arguments to a function inside JSX: jsxAttribute={() => this.functionName()}
* DON'T DO THIS TO CHANGE STATE: this.state.persons[0].name = 'Luis Manuel'
* Always create a copy of any property of the state object when modifying the state object, never change the data directly.