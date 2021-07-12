"use strict";

import { Form } from "./components/Form.js";
import { Todo } from "./components/Todo.js";

const form = new Form('body');
const tasks = new Todo('body');

form.saveButtonCallback = tasks.createCard.bind(tasks);

form.init();
tasks.init();


console.log(form);





