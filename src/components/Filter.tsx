

type filterProps = {
    priceHandle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    categoryHandle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function Filter({ priceHandle, categoryHandle, handleSubmit} : filterProps) {
    
    const filters = [
        {filter: 'price', description: 'Filtrar por precio'}, 
        {filter: 'category', description: "Filtrar por categoría"}
    ]
    
    return(
        <div className="filtros">
            <div className="d-flex align-items-center justify-content-end">
                <img className="img-fluid" src="/img/filtro.png" alt="imagen filtro"/>
                <form onSubmit={handleSubmit}>
                    <div id="filtro">
                    {filters.map((option) => (
                        <div key={option.filter}>
                            {option.filter == "price" ? (
                            <>
                                <legend className="text-center">Filtrar por precio</legend>
                                <div className="filtros-range">
                                    <div id="range">
                                        <label className="text-center">Min</label>
                                        <input type="number" name="minRange" min="0" max="400000" step="10000" onChange={priceHandle}></input>
                                    </div>
                                    <div id="range">
                                        <label className="text-center">Max</label>
                                        <input type="number" name="maxRange" min="0" max="400000" step="10000" onChange={priceHandle}></input>
                                    </div>
                                </div>
                            </>
                            ) : (
                            <>
                                <legend className="text-center">Filtrar por categoría</legend>
                                <div className="filtros-checkbox">
                                    <div>
                                        <input type="checkbox" name="category" value="A" onChange={categoryHandle}></input>
                                        <label>Tipo A</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="category_2" value="B" onChange={categoryHandle}></input>
                                        <label>Tipo B</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="category_3" value="C" onChange={categoryHandle}></input>
                                        <label>Tipo C</label>
                                    </div>
                                </div>
                            </>
                            )}
                        </div>
                    ))}
                    <button type="submit" className="btn btn-dark w-100 mt-3 p-2">Aplicar filtros</button>
                </div>
            </form>
        </div>
        </div>
    )
}