import React, { useContext } from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

import '../styles/rc-slider.css'
import styled, { css } from 'styled-components'
import DefaultButton from '../styles/Button'
import PriceTag, { Price } from './PriceTag'
import { licensePrice, proPlanPrice } from './prices'
import CurrencyContext from '../contexts/CurrencyContext'

const PlanWrapper = styled.div`
  display: grid;
  gap: 1em;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Plan = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
  border-width: ${p => (p['data-recommended'] ? '3px' : '1px')};
  border-style: solid;
  border-radius: 5px;
  border-color: ${p => p.theme.primary};

  h3 {
    font-size: 2em;
    margin-bottom: 0;
  }

  ${p =>
    p['data-recommended'] &&
    css`
      margin: -2px;
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        content: attr(data-recommended);
        color: white;
        padding: 0.2em;
        background-color: ${p.theme.primary};
        text-align: center;
      }
    `};
`

const PlanText = styled.p`
  text-align: center;
  @media (min-width: 800px) {
    height: 7em;
  }
`

const PlanFeature = styled.p`
  flex: 1;
  font-weight: bold;
  @media (min-width: 800px) {
    height: 3em;
  }
`

const SelectPlanButton = ({ to, children }) => (
  <Link to={to}>
    <DefaultButton
      css={`
        margin-bottom: 2em;
      `}
    >
      {children}
    </DefaultButton>
  </Link>
)

export default injectIntl(({ intl }) => {
  const { currency } = useContext(CurrencyContext)
  return (
    <>
      <h2>{intl.formatMessage({ id: 'pricing.plans.heading' })}</h2>
      <p>{intl.formatMessage({ id: 'pricing.subtitle' })}</p>
      <PlanWrapper>
        <Plan>
          <h3>{intl.formatMessage({ id: `pricing.plans.solo.name` })}</h3>
          <PlanText>
            {intl.formatMessage({ id: `pricing.plans.solo.text` })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage({ id: `pricing.plans.solo.features` })}
          </PlanFeature>
          <Price>
            {intl.formatMessage({ id: `pricing.plans.solo.price` })}
          </Price>
          <SelectPlanButton to="/pricing/solo/enrol">
            {intl.formatMessage({ id: `pricing.order` })}
          </SelectPlanButton>
        </Plan>
        <Plan
          data-recommended={intl.formatMessage({
            id: 'pricing.plans.recommended',
          })}
        >
          <h3>{intl.formatMessage({ id: `pricing.plans.pro.name` })}</h3>
          <PlanText>
            {intl.formatMessage({ id: `pricing.plans.pro.text` })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage({ id: 'pricing.plans.pro.feature1' })}
            <br />
            {intl.formatMessage(
              {
                id: 'pricing.plans.pro.feature2',
              },
              {
                licensePrice: intl.formatNumber(licensePrice, {
                  style: 'currency',
                  currency,
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                }),
              }
            )}
          </PlanFeature>
          <PriceTag price={proPlanPrice} />
          <SelectPlanButton to="/pricing/pro/tabletcount">
            {intl.formatMessage({ id: `pricing.order` })}
          </SelectPlanButton>
        </Plan>
        <Plan>
          <h3>{intl.formatMessage({ id: `pricing.plans.enterprise.name` })}</h3>
          <PlanText>
            {intl.formatMessage({ id: `pricing.plans.enterprise.text` })}
          </PlanText>
          <PlanFeature>
            {intl.formatMessage({ id: `pricing.plans.enterprise.features` })}
          </PlanFeature>
          <SelectPlanButton to="/contact">
            {intl.formatMessage({ id: `pricing.plans.enterprise.contact` })}
          </SelectPlanButton>
        </Plan>
      </PlanWrapper>
    </>
  )
})
