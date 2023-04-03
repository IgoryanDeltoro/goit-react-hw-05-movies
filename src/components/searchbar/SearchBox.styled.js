import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 20px 0 0 20px;
  background: whitesmoke;
  padding: 0 20px;
  font-size: 17px;
  border: 1px solid rgb(178, 178, 178);
  border-right: 0;
  float: left;
  outline: none;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 41.83px;
  background: whitesmoke;
  border-radius: 0 20px 20px 0;
  border: 1px solid rgb(178, 178, 178);
  border-left: 0;
  cursor: pointer;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  right: 6px;
`;
