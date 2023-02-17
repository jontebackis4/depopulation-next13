import Image from 'next/image'
import { Inter } from '@next/font/google'
import SelectCountry from '@/components/select_country'
import PopulationAgeAndGenderDistribution from '@/components/population_age_and_gender_distribution'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={'container mx-auto h-screen flex flex-col justify-between'}>
      <div>
        <SelectCountry/>
        {/* <TotalPopulation> */}
        <PopulationAgeAndGenderDistribution/>
      </div>

      <footer>
        Footer
      </footer>
    </main>
  )
}
