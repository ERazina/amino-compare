import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  .formContainer {
    padding-bottom: 20px;
  }

  .formLabel {
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .formInput {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    background-color: #fff;
    color: #333;
    box-shadow: 0 0 0 2px transparent;
  }
  .form-input::placeholder {
    color: #aaa;
  }

  .form-input:hover {
    border-color: #888;
  }

  .form-input:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
`;
