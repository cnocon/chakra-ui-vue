import { CSelect } from '../..'
import { render, screen } from '@/tests/test-utils'

const renderComponent = (props) => {
  const inlineAttrs = (props && props.inlineAttrs) || ''
  const base = {
    data: () => ({ value: 'option1' }),
    components: { CSelect },
    template: `<CSelect data-testid="select" placeholder="input placeholder" v-model="value" ${inlineAttrs}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </CSelect>`,
    ...props
  }
  return render(base)
}

test('should render correctly', () => {
  const { asFragment } = renderComponent()
  expect(asFragment()).toMatchSnapshot()
})

test('disabled select renders correctly', () => {
  renderComponent({ inlineAttrs: 'isDisabled' })
  const select = screen.getByRole('combobox')

  expect(select).toHaveAttribute('disabled')
})
