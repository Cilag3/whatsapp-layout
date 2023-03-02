const contactList = [
  {
    image:
      'https://this-person-does-not-exist.com/img/avatar-111784b30eb59c7d0b74027a7f11cc63.jpg',
    name: 'Joseane',
    isFixed: false,
    messageList: [
      {
        byUser: false,
        message: 'Oi amiga',
        createdAt: '13:01'
      },
      {
        byUser: false,
        message: 'Tudo bem?',
        createdAt: '13:02'
      },
      {
        byUser: true,
        message: 'Tudo sim e vc?',
        createdAt: '17:33'
      }
    ]
  },
  {
    image:
      'https://this-person-does-not-exist.com/img/avatar-11c7b7033c37777dc8955f926a05cd49.jpg',
    name: 'Rafaela',
    isFixed: true,
    messageList: [
      {
        byUser: false,
        message: 'Oi amiga',
        createdAt: '14:01'
      },
      {
        byUser: false,
        message: 'Vi seu vídeo ontyem',
        createdAt: '14:02'
      },
      {
        byUser: true,
        message: 'Tudo sim e vc?',
        createdAt: '14:02'
      }
    ]
  }
]

function getContactList() {
  return contactList.map(contact => ({
    image: contact.image,
    name: contact.name,
    isFixed: contact.isFixed
  }))
}

/*
 * @param contactName String Nome do contato a ser pesquisado na lista de contatos
 *@return undefined | lista de mesnsagens do contato pesquisado
 */
function getContactMessages(contactName) {
  const contact = contactList.find(contact => contact.name === contactName)
  if (contact === undefined) {
    return undefined
  } else {
    return contact.messageList
  }
}
