import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
      description: 'Is it vegetarian?',
    },
  ],
  // creating a custom view for the CMS
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: (fields) => ({
      title: `${fields.name}  ${fields.vegetarian ? '🌱' : ''}`,
    }),
  },
};
