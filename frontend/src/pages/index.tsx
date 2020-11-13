import React, { useState } from 'react'
import Head from 'next/head'
import {
  Container,
  Main,
  Input,
  InputGroupDiv,
  Button,
  ErrorMessage
} from '../styles/pages/Home'
import { api } from '../services/api'

const Home: React.FC = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [errorAlert, setErrorAlert] = useState(false)

  async function clickHandler() {
    await api
      .post('/users', { name, surname, email })
      .then(() => {
        setErrorAlert(false)
      })
      .catch(() => {
        setErrorAlert(true)
      })
  }

  return (
    <Container>
      <Head>
        <title>Newsletter System</title>
      </Head>

      <Main>
        <h1>Create User</h1>
        <InputGroupDiv>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="text"
            name="surname"
            id="surname"
            placeholder="Sobrenome"
            onChange={e => setSurname(e.target.value)}
          />
        </InputGroupDiv>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Button type="button" onClick={clickHandler}>
          Register
        </Button>
        {errorAlert && (
          <ErrorMessage>This email has already been taken</ErrorMessage>
        )}
      </Main>
    </Container>
  )
}

export default Home
