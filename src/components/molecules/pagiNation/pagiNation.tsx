import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../themes'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 90px;
`

const PaginationButton = styled.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${theme.colors.black};
  padding: 16px 16px;
  margin: 0 8px;
  cursor: pointer;
  font-size: ${theme.fontSizes.mediumLarge}px;
  @media (width <= ${theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: ${theme.fontSizes.medium}px;
  }
`

const StyledSpan = styled.span`
  margin-top: 7px;
  @media (width <= ${theme.breakpoints.mobile}) {
    margin-top: 5px;
  }
`
const PaginationNumberButton = styled(PaginationButton)<{ selected: boolean }>`
  ${({ selected }) =>
    selected &&
    css`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${theme.colors.backgroundBlack};
      color: ${theme.colors.white};
      @media (width <= ${theme.breakpoints.mobile}) {
        width: 40px;
        height: 40px;
      }
    `}
  transition: 0.8s;
  &:hover {
    transition: 0.8s;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: scale(1.05);
    border: 1px solid ${theme.colors.backgroundBlack};
    @media (width <= ${theme.breakpoints.mobile}) {
      width: 40px;
      height: 40px;
    }
  }
`
const shouldDisplayPageNumber = (currentPage: number, pageNumber: number, totalPages: number) => {
  if (pageNumber === 1 || pageNumber === totalPages) {
    return true
  }

  if (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) {
    return true
  }

  return false
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  const [selectedPage, setSelectedPage] = useState(currentPage)
  return (
    <PaginationContainer>
      {/* {currentPage > 1 && (
        <PaginationButton
          onClick={() => {
            onPageChange(currentPage - 1)
            setSelectedPage(currentPage - 1)
          }}
        >
          前へ
        </PaginationButton>
      )} */}

      {pageNumbers.map((number, index) => {
        if (shouldDisplayPageNumber(currentPage, number, totalPages)) {
          return (
            <PaginationNumberButton
              key={number}
              onClick={() => onPageChange(number)}
              selected={number === currentPage}
            >
              {number}
            </PaginationNumberButton>
          )
        } else if (
          index > 0 &&
          shouldDisplayPageNumber(currentPage, pageNumbers[index - 1], totalPages) &&
          !shouldDisplayPageNumber(currentPage, pageNumbers[index], totalPages)
        ) {
          return <StyledSpan key={`ellipsis-${number}`}>...</StyledSpan>
        } else {
          return null
        }
      })}

      {/* {currentPage < totalPages && (
        <PaginationButton
          onClick={() => {
            onPageChange(currentPage + 1)
            setSelectedPage(currentPage + 1)
          }}
        >
          次へ
        </PaginationButton>
      )} */}
    </PaginationContainer>
  )
}

export { Pagination }
