import React, { useContext } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { PageContainer, SectionContainer, SectionTitle, SectionWrapper, Divider } from "../Pages.styles";
import cirurgiaImg from "../../Assets/cirurgias_icon.png";
import exameImg from "../../Assets/exames_icon.png";
import contaImg from "../../Assets/contas_icon.png";
import increase from "../../Assets/increase.png";
import decrease from "../../Assets/decrease.png";
import Casos from "./Casos";
import { CASOS_DUMMY_DATA } from "../../data";
import ChartComponent from "../../Components/ChartComponent/ChartComponent";
import PedidoDestaque from "../../Components/PedidoDestaque/PedidoDestaque";
import img from "../../Assets/avatar.png";
import { Carousel } from "@trendyol-js/react-carousel";
import { ArrowLeft, ArrowRight } from "./Inicio.styles";
import CampanhasChart from "../../Components/CampanhasChart/CampanhasChart";
import { DataCtx } from "../Dashboard/Dashboard";

const pedidosDestaquesData = [
  {
    id: 1,
    username: "Flavio",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
  {
    id: 2,
    username: "Athos",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
  {
    id: 3,
    username: "Mauricio",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
  {
    id: 4,
    username: "Ananda",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
  {
    id: 5,
    username: "Lucas",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
  {
    id: 6,
    username: "Diego",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
  {
    id: 7,
    username: "Mariana",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
  {
    id: 8,
    username: "Higor",
    data: "2 de novembro",
    desc: "Architecto consequatur molestias repellat qui. Quia est asd doloremque veniam est rerum. Soluta",
    img: img,
  },
];

const Inicio = () => {
  const { casos, pacientes, usuarios } = useContext(DataCtx);

  //CARDS DE CIRURGIAS, EXAMES E CONTAS MEDICAS /////////////////////////////////////////////////////////

  const cirurgias = casos?.data?.filter((c) => c.TipoCaso.TPC_Id === 0);

  const exames = casos?.data?.filter((c) => c.TipoCaso.TPC_Id === 1);

  const contasMedicas = casos?.data?.filter((c) => c.TipoCaso.TPC_Id === 2);

  const cardData = [
    {
      id: 1,
      title: "Cirurgia",
      value: cirurgias.length,
      img: cirurgiaImg,
    },
    {
      id: 2,
      title: "Exames",
      value: exames.length,
      img: exameImg,
    },
    {
      id: 3,
      title: "Contas Médicas",
      value: contasMedicas.length,
      img: contaImg,
    },
  ];

  // CARDS DE ESTATÍSTICAS //////////////////////////////////////////////////////////////////////////////////

  const statisticsCardData = [
    {
      id: 1,
      title: "Doações",
      value: 20.0,
      percentageChange: 2.5,
      img: increase,
    },
    {
      id: 2,
      title: "Pacientes",
      value: pacientes?.data?.length,
      percentageChange: -4.4,
      img: decrease,
    },
    {
      id: 3,
      title: "Usuários",
      value: usuarios?.data?.length,
      percentageChange: 2.5,
      img: increase,
    },
  ];
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Informações rápidas</SectionTitle>
        <Divider />
        <SectionWrapper>
          {cardData.map((card) => {
            return (
              <InfoCard
                title={card.title}
                value={card.value}
                img={card.img}
                key={card.id}
                onClick={() => {
                  alert(card.title);
                }}
              />
            );
          })}
        </SectionWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Estatísticas</SectionTitle>
        <Divider />
        <SectionWrapper>
          {statisticsCardData.map((card) => {
            return (
              <InfoCard
                id={card.id}
                title={card.title}
                value={card.value}
                percentageChange={card.percentageChange}
                img={card.img}
                key={card.id}
                onClick={() => {
                  alert(card.title);
                }}
              />
            );
          })}
          <ChartComponent title={"Pacientes"} value={98} />
          <ChartComponent title={"Cirurgias"} value={110} />
          <ChartComponent title={"Lista de Espera"} value={155} />
        </SectionWrapper>
        {/* <Casos casos={CASOS_DUMMY_DATA} /> */}
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Pedidos em Destaque</SectionTitle>
        <Divider />
        <SectionWrapper>
          <Carousel show={3.5} slide={1} swiping={true} rightArrow={<ArrowRight />} leftArrow={<ArrowLeft />}>
            {pedidosDestaquesData.map((pedido) => {
              return (
                <PedidoDestaque
                  key={pedido.id}
                  username={pedido.username}
                  imgSrc={pedido.img}
                  data={pedido.data}
                  desc={pedido.desc}
                />
              );
            })}
          </Carousel>
        </SectionWrapper>
        <CampanhasChart />
      </SectionContainer>
    </PageContainer>
  );
};

export default Inicio;
