import { render,screen,waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Form from "./form"
import {jest} from '@jest/globals'
// import { mount } from 'enzyme';

const { getByPlaceholderText, getByLabelText } = render(<Form />);

it("Should have placeholder text", ()=>{
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument()
})

describe('Find label', () => {
    test('label should be match', () => {
      render(<Form/>);
  
      screen.getByText('Email');
    });
  });

describe("check data in alert",()=>{
    test("alert data and form data should be same",()=>{
        window.alert = jest.fn()
        render(<Form/>);
        const alertData = screen.getByText(/Email/i);
        expect(alertData).toBeInTheDocument();
    })
})