export interface IAddress {
  name: string
  address: string
}

export interface IEmail {
  to: IAddress
  from: IAddress
  subject: string
  text: string
}

export interface IMailProvider {
  sendEmail(email: IEmail): Promise<void>
}
