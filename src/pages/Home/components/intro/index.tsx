import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import HomeImg from '../../../../assets/coffee.svg'
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { RegularText } from "../../../../components/Typography";

export function Intro(){
  const {colors} = useTheme();

  return(
    <IntroContainer>
      <IntroContent className="container">
      <div>
        <section>
          <IntroTitle size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <RegularText size="l" color="subtitle" as="h3"> 
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </RegularText>
        </section>

        <BenefitsContainer>
          <InfoWithIcon
            iconBg={colors["brand-yellow-dark"]}
            icon={<ShoppingCart weight="fill"/>}
            text="Compra simples e segura"
            />
           <InfoWithIcon
            iconBg={colors["base-text"]}
            icon={<Package weight="fill"/>}
            text="Embalagem mantém o café intacto"
            />
             <InfoWithIcon
            iconBg={colors["brand-yellow"]}
            icon={<Timer weight="fill"/>}
            text="Entega rápida e rastreada"
            />
             <InfoWithIcon
            iconBg={colors["brand-purple"]}
            icon={<Coffee weight="fill"/>}
            text="O café chega fresquinho até você"
            />
        </BenefitsContainer>
      </div>
      <img src={HomeImg} />
      </IntroContent>
    </IntroContainer>
  )
}
