import React from 'react';
import { Spinner, LoadingWrapper, Message } from './styles';

const Loading = () => (
  <LoadingWrapper>
    <Spinner />
    <Message>CARREGANDO...</Message>
  </LoadingWrapper>
);

export default Loading;
