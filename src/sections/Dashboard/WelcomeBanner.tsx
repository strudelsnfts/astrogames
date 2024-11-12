import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import styled from 'styled-components'
import { useUserStore } from '../../hooks/useUserStore'

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto; /* Centers the container horizontally */
`

const Banner = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  
  & > button {
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    background: #ffffffdf;
    transition: background-color 0.2s ease;
    color: black;
    cursor: pointer;
    font-size: 16px;
    
    &:hover {
      background: white;
    }
  }
`

export function WelcomeBanner() {
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const store = useUserStore()
  
  const copyInvite = () => {
    store.set({ userModal: true })
    if (!wallet.connected) {
      walletModal.setVisible(true)
    }
  }

  return (
    <WelcomeContainer>
      <Banner>
        <img src="/banner.jpeg" alt="Welcome Banner" />
      </Banner>
      <Buttons>
        <button onClick={copyInvite}>💸 Copy Invite</button>
        <button onClick={() => window.open('https://discord.gg/mosc', '_blank')}>💬 Join Discord</button>
      </Buttons>
    </WelcomeContainer>
  )
}