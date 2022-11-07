import React from 'react';

import { Modal } from '../components/Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Modal {...args} />;

export const Deslizar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Deslizar.args = {
  titulo: 'Titulo Ventana',
  informacion: 'Contenido del cuerpo de la ventana modal',
  clasemodal:'movedown'
};

export const Rotar = Template.bind({});
Rotar.args = {
  titulo: 'Titulo Ventana',
  informacion: 'Contenido del cuerpo de la ventana modal',
  clasemodal:'rotate'
};

export const Resize = Template.bind({});
Resize.args = {
  titulo: 'Titulo Ventana',
  informacion: 'Contenido del cuerpo de la ventana modal',
  clasemodal:'resize'
};
