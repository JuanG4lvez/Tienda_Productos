import '../css/Filter.css'

type filterProps = {
    filter: {
        minRange: number,
        maxRange: number,
        category: string[]
    }
    priceHandle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    categoryHandle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    categories: string[]
}

export default function Filter({ priceHandle, categoryHandle, handleSubmit, categories} : filterProps) {
    
    const filters = [
        {id: 1, filter: 'price', description: 'Filtrar por precio'}, 
        {id: 2, filter: 'category', description: "Filtrar por categoría"}
    ]
    
    return(
        <nav className="my-4 d-flex align-items-end">
            <div className="filtros">
                <img className="" src="/images/filtro.png" alt="imagen filtro"/>
                <form onSubmit={handleSubmit}>
                    <div id="filtro">
                    {filters.map((option) => (
                        <div key={option.id}>
                            {option.filter == "price" ? (
                            <>
                                <legend className="text-center">Filtrar por precio</legend>
                                <div className="filtros-range">
                                    <div id="range">
                                        <label className="text-center">Min</label>
                                        <input type="number" name="minRange" min="0" max="400" step="50" onChange={priceHandle}></input>
                                    </div>
                                    <div id="range">
                                        <label className="text-center">Max</label>
                                        <input type="number" name="maxRange" min="0" max="400" step="50" onChange={priceHandle}></input>
                                    </div>
                                </div>
                            </>
                            ) : (
                            <>
                                <legend className="text-center">Filtrar por categoría</legend>
                                <div className="filtros-checkbox">
                                    {categories.map(category => (
                                    <div key={categories.indexOf(category)}>
                                        <input type="checkbox" name="category" value={category} onChange={categoryHandle}></input>
                                        <label>{category}</label>
                                    </div>
                                    ))}
                                </div>
                            </>
                            )}
                        </div>
                    ))}
                    <button type="submit" className="btn btn-dark w-100 mt-3 p-2">Aplicar filtros</button>
                </div>
            </form>
        </div>
    </nav>
    )
}