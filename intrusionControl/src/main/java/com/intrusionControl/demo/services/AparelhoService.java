package com.intrusionControl.demo.services;


import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import com.intrusionControl.demo.DTO.AparelhoDTO;
import com.intrusionControl.demo.DTO.IrmaoDTO;
import com.intrusionControl.demo.entities.Aparelho;
import com.intrusionControl.demo.repositories.AparelhoRepository;
import jakarta.persistence.EntityNotFoundException;


//SERVICE É TODA A LÓGICA DO NEGÓCIO;

@Service
public class AparelhoService {
	

	
	@Autowired
    private AparelhoRepository aparelhoRepository;
	
	

	
	//Buscar todos os dados da tabela Aparelho. Vai vir cada aparelho e seus dados/características;
	@Transactional(readOnly = true)
	public List<AparelhoDTO> findAll() {
		List<Aparelho> result = aparelhoRepository.findAll();
		return result.stream().map(x -> new AparelhoDTO(x)).toList();
	}
	
	//Buscar por id;
	//Pode, aqui, fazer tratamento de exceção. Por exemplo para um id que não existe;
	@Transactional(readOnly = true)
	public AparelhoDTO findById(String id) {
        Aparelho result = aparelhoRepository.findById(id).get();
        AparelhoDTO dto = new AparelhoDTO(result);
        return dto;
    }
	
	
	
	// Inserir novo Aparelho (POST)
	@Transactional
    public AparelhoDTO create(@RequestBody AparelhoDTO dto) {
        Aparelho entity = new Aparelho();
        updateData1(entity, dto);
        entity = aparelhoRepository.save(entity);
//        sincronizarIrmaos(entity); // Sincronizar irmãos após criar o aparelho
        return new AparelhoDTO(entity);
    }

    // Método auxiliar para atualizar os dados do aparelho
    private void updateData1(Aparelho entity, AparelhoDTO dto) {
        entity.setId_aparelho(dto.getId_aparelho()); 
        entity.setMarcaModelo(dto.getMarcaModelo());
        entity.setContaGoogle(dto.getContaGoogle());
        entity.setChip01(dto.getChip01());
        entity.setChip02(dto.getChip02());
        entity.setWhatsapp01(dto.getWhatsapp01());
        entity.setWhatsapp02(dto.getWhatsapp02());
        entity.setWhatsappGb01(dto.getWhatsappGb01());
        entity.setWhatsappGb02(dto.getWhatsappGb02());
        entity.setObservacao(dto.getObservacao());
        entity.setUltRecChip01(dto.getUltRecChip01());
        entity.setUltRecChip02(dto.getUltRecChip02());
        
        entity.setCadastroChip01(dto.getCadastroChip01());
        entity.setCadastroChip02(dto.getCadastroChip02());
        
        entity.setIrmaoWA01(dto.getIrmaoWA01());
        entity.setIrmaoWA02(dto.getIrmaoWA02());
        
        entity.setIrmaoGB01(dto.getIrmaoGB01());
        entity.setIrmaoGB02(dto.getIrmaoGB02());
    }



	// Atualizar Aparelho (PUT)
    
    @Transactional
    public AparelhoDTO update(String id, AparelhoDTO dto) {
        try {
            Aparelho entity = aparelhoRepository.getReferenceById(id); // Encontra a entidade por id
            updateData1(entity, dto); // Atualiza os dados
            entity = aparelhoRepository.save(entity); // Salva as mudanças no banco         
            return new AparelhoDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundException("Aparelho não encontrado");
        } catch (DataIntegrityViolationException e) {
            throw new RuntimeException("Erro de integridade: " + e.getMessage());
        }
    }

        
     // Deletar Aparelho (DELETE)
     @Transactional
     public void delete(String id) {
        try {
            aparelhoRepository.deleteById(id); // Deleta pelo id
        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundException("Aparelho não encontrado");
        }
     }
     
    
     
     //É PARA A PARTE DE IRMÃOS CADASTRADOS
     //é responsável por gerar a lista de IrmaoDTO (Frontend -> Irmãos Cadastrados)
     @Transactional
     public List<IrmaoDTO> findIrmaos() {
    	 
    	 //recupera todos os aparelhos do repositório.
         List<Aparelho> aparelhos = aparelhoRepository.findAll();
         List<IrmaoDTO> irmaos = new ArrayList<>();

         //percorre cada aparelho e verifica se há informações nos campos de irmãos
         for (Aparelho aparelho : aparelhos) {
             if (aparelho.getIrmaoWA01() != null && aparelho.getWhatsapp01() != null) {
                 IrmaoDTO irmaoDto = new IrmaoDTO();
                 irmaoDto.setNomeIrmao(aparelho.getIrmaoWA01());
                 irmaoDto.setWhatsapp(aparelho.getWhatsapp01());
                 irmaoDto.setIdAparelho(aparelho.getId_aparelho());
                 irmaos.add(irmaoDto);
             }
             if (aparelho.getIrmaoWA02() != null && aparelho.getWhatsapp02() != null) {
                 IrmaoDTO irmaoDto = new IrmaoDTO();
                 irmaoDto.setNomeIrmao(aparelho.getIrmaoWA02());
                 irmaoDto.setWhatsapp(aparelho.getWhatsapp02());
                 irmaoDto.setIdAparelho(aparelho.getId_aparelho());
                 irmaos.add(irmaoDto);
             }
             if (aparelho.getIrmaoGB01() != null && aparelho.getWhatsappGb01() != null) {
                 IrmaoDTO irmaoDto = new IrmaoDTO();
                 irmaoDto.setNomeIrmao(aparelho.getIrmaoGB01());
                 irmaoDto.setWhatsapp(aparelho.getWhatsappGb01() + " (GB)");
                 irmaoDto.setIdAparelho(aparelho.getId_aparelho());
                 irmaos.add(irmaoDto);
             }
             if (aparelho.getIrmaoGB02() != null && aparelho.getWhatsappGb02() != null) {
                 IrmaoDTO irmaoDto = new IrmaoDTO();
                 irmaoDto.setNomeIrmao(aparelho.getIrmaoGB02());
                 irmaoDto.setWhatsapp(aparelho.getWhatsappGb02() + " (GB)");
                 irmaoDto.setIdAparelho(aparelho.getId_aparelho());
                 irmaos.add(irmaoDto);
             }
         }

         return irmaos;
     }
     
     
     

}
